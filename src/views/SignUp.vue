<template>
    <div id="signUp">
        <h1 class="page-header">填写报名信息</h1>
        <el-form :model="form" :rules="rules" ref="formRef" class="signUpForm">
            <el-form-item label="学号" prop="studentId">
                <el-input type="text" v-model="form.studentId" placeholder="学号（必填）"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input type="text" v-model="form.name" placeholder="姓名（必填）"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-select v-model="form.gender" placeholder="性别（必填）">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="qq号" prop="qq">
                <el-input type="text" v-model="form.qq" placeholder="qq号（必填）"></el-input>
            </el-form-item>
            <el-form-item label="专业班级" prop="major">
                <el-input type="text" v-model="form.major" placeholder="专业班级（必填）"></el-input>
            </el-form-item>
            <el-form-item label="自我介绍" prop="profile" size="medium">
                <el-input type="textarea" v-model="form.profile"
                          placeholder="可以写技术栈发展方向，获奖记录，兴趣方向，一天可来实验室学习的时长等"></el-input>
            </el-form-item>
        </el-form>
        <div id="buttonList">
            <el-button type="primary" @click="verifyForm()">报名</el-button>
            <el-button type="primary" @click="reset()">重写自我介绍</el-button>
            <el-button type="primary" @click="dialogFormVisible=true">查询报名结果</el-button>
        </div>
        <el-dialog title="查询报名结果" v-model="dialogFormVisible">
            <el-form :model="queryForm" ref="queryRef" :rules="queryRules">
                <el-form-item label="学号" prop="studentId">
                    <el-input v-model="queryForm.studentId" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
        <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="verifyQueryForm()">确 定</el-button>
        </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
    import {ref,h} from 'vue';
    import {ElNotification} from "element-plus";
    import{ElMessageBox} from "element-plus"
    import {Query, signUp} from "../api/user";

    export default {
        name: "SignUp",
        setup() {
            const form = ref({
                studentId: '',
                name: '',
                gender: '',
                qq: '',
                major: '',
                profile: '',
            })
            const queryForm = ref({
                studentId: ''
            });
            const formRef = ref(null)
            const queryRef = ref(null)
            const dialogFormVisible = ref(false)
            const rules = ref({
                studentId: [
                    {
                        required: true,
                        message: '用户名不能为空',
                        trigger: 'blur',
                    },
                ],
                name: [
                    {
                        required: true,
                        message: '姓名不能为空',
                        trigger: 'blur',
                    },
                ],
                gender: [
                    {
                        required: true,
                        message: '性别不能为空',
                        trigger: 'blur',
                    },
                ],
                qq: [
                    {
                        required: true,
                        message: 'qq号不能为空',
                        trigger: 'blur',
                    },
                ],
                major: [
                    {
                        required: true,
                        message: '专业班级不能为空',
                        trigger: 'blur',
                    },
                ],
            });
            const queryRules = ref({
                studentId: [
                    {
                    required: true,
                    message: '学号不能为空',
                    trigger: 'blur',
                }
                ],
            });
            const reset = () => {
                form.value.profile = ''
            }
            const verifyForm = () => {
                formRef.value.validate((valid) => {
                    if (valid) {
                        submit(form.value)
                    } else {
                        ElNotification({
                            title: '报名失败',
                            message: '请按照正确格式填写个人信息',
                            type: 'warning',
                        });
                    }
                })
            }
            const verifyQueryForm = () => {
                queryRef.value.validate((valid) => {
                    if (valid) {
                        query(queryForm.value)
                    } else {
                        ElNotification({
                            title: '查询失败',
                            message: '请按照正确格式填写个人信息',
                            type: 'warning',
                        });
                    }
                })
            }
            const submit = (form) => {
                // console.log(form)
                signUp(form).then(res => {
                    // console.log(res)
                    ElNotification({
                        title: '报名成功',
                        message: res.data,
                        type: 'success',
                    });
                }).catch(error => {
                    console.log(error)
                });
            }
            const query = (form) => {
                Query(form).then(res => {
                    // console.log(res)
                    ElMessageBox({
                        title: '报名结果',
                        message: h('div', null, [
                            h('p', null,"学号: "+res.data.studentId),
                            h('br',null,null),
                            h('p', null,"姓名: "+res.data.name),
                            h('br',null,null),
                            h('p', null,"性别: "+res.data.gender),
                            h('br',null,null),
                            h('p', null,"qq号: "+res.data.qq),
                            h('br',null,null),
                            h('p', null,"专业班级: "+res.data.major),
                            h('br',null,null),
                            h('p', null,"自我介绍: "+res.data.profile),
                            h('br',null,null),
                            h('p', null,"是否录取: "+res.data.statusName),
                            h('br',null,null),
                            h('p', null,"评语: "+res.data.comment),
                            h('br',null,null),
                            h('p', null,"更新时间: "+res.data.updateTime),
                            h('br',null,null),
                        ]),
                        confirmButtonText: '确定',
                    })
                }).catch(error => {
                    console.log(error)
                });
            }
            return {
                reset,
                submit,
                verifyForm,
                verifyQueryForm,
                queryRules,
                form,
                queryForm,
                dialogFormVisible,
                rules,
                formRef,
                queryRef,
            }
        },
    }
</script>

<style lang="less">
    @import "../style/SignUp";
</style>